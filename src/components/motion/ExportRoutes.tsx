"use client";

import * as React from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import { useReducedMotion } from "motion/react";
import { Globe2 } from "lucide-react";

const W = 1000;
const H = 400;
const LAT_TOP = 80;
const LAT_SPAN = 138;

const project = (lon: number, lat: number): [number, number] => [
  ((lon + 180) / 360) * W,
  ((LAT_TOP - lat) / LAT_SPAN) * H,
];

const ORIGIN = { name: "Zirakpur, India", pos: project(76.8, 30.65) };
const LANES = [
  { name: "CIS & Central Asia", pos: project(68, 47) },
  { name: "Middle East", pos: project(51, 25) },
  { name: "East Africa", pos: project(37, -1) },
  { name: "West Africa", pos: project(6, 9) },
  { name: "ASEAN", pos: project(106, 15) },
  { name: "Latin America", pos: project(-52, -12) },
];

function arc([x1, y1]: [number, number], [x2, y2]: [number, number]) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const lift = Math.min(120, Math.hypot(x2 - x1, y2 - y1) * 0.35);
  return `M${x1},${y1} Q${mx},${my - lift} ${x2},${y2}`;
}

/**
 * Dotted world map with shipping lanes fanning out from the Zirakpur head
 * office. Land dots are sampled client-side from the same world-atlas file the
 * contact globe uses; lanes still render if it fails to load.
 */
export function ExportRoutes() {
  const reduce = useReducedMotion();
  const [dots, setDots] = React.useState<[number, number][]>([]);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
        );
        const topo = await res.json();
        const land = feature(topo, topo.objects.land) as unknown as d3.GeoPermissibleObjects;
        const pts: [number, number][] = [];
        for (let lat = LAT_TOP - 1; lat > LAT_TOP - LAT_SPAN; lat -= 2.6) {
          for (let lon = -179; lon < 180; lon += 2.6) {
            if (d3.geoContains(land, [lon, lat])) pts.push(project(lon, lat));
          }
        }
        if (!cancelled) setDots(pts);
      } catch {
        /* map dots are decorative */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[4px] border border-white bg-white/80 p-4 shadow-[0_10px_40px_rgba(30,80,160,0.10)] backdrop-blur sm:p-6">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Export shipping lanes from Zirakpur, India to CIS, Middle East, Africa, ASEAN and Latin America"
      >
        <defs>
          <linearGradient id="lane" x1="0" x2="1">
            <stop offset="0" stopColor="#0b4a99" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        <g fill="#c5d8f2">
          {dots.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={1.7} />
          ))}
        </g>

        {LANES.map((l, i) => {
          const d = arc(ORIGIN.pos, l.pos);
          return (
            <g key={l.name}>
              <path d={d} fill="none" stroke="#0b5bd3" strokeOpacity={0.18} strokeWidth={1.5} />
              <path
                d={d}
                fill="none"
                stroke="url(#lane)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="5 9"
              >
                {!reduce && (
                  <animate
                    attributeName="stroke-dashoffset"
                    from="28"
                    to="0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                )}
              </path>
              {!reduce && (
                <circle r={4.5} fill="#0a1f44">
                  <animateMotion
                    dur="4.5s"
                    begin={`${i * 0.7}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>
              )}
              <circle cx={l.pos[0]} cy={l.pos[1]} r={5} fill="#0b5bd3" />
              {!reduce && (
                <circle cx={l.pos[0]} cy={l.pos[1]} r={5} fill="none" stroke="#0b5bd3" strokeWidth={2}>
                  <animate attributeName="r" values="5;20" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              )}
              <text
                x={l.pos[0]}
                y={l.pos[1] + (l.pos[1] > ORIGIN.pos[1] ? 26 : -14)}
                textAnchor="middle"
                className="fill-[#0a1f44]"
                style={{ fontSize: 14, fontWeight: 700 }}
              >
                {l.name}
              </text>
            </g>
          );
        })}

        <g>
          <circle cx={ORIGIN.pos[0]} cy={ORIGIN.pos[1]} r={8} fill="#0a1f44" />
          {!reduce && (
            <circle cx={ORIGIN.pos[0]} cy={ORIGIN.pos[1]} r={8} fill="none" stroke="#0a1f44" strokeWidth={2}>
              <animate attributeName="r" values="8;30" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0" dur="2.4s" repeatCount="indefinite" />
            </circle>
          )}
          <text
            x={ORIGIN.pos[0] + 14}
            y={ORIGIN.pos[1] + 5}
            className="fill-[#0a1f44]"
            style={{ fontSize: 15, fontWeight: 800 }}
          >
            {ORIGIN.name}
          </text>
        </g>
      </svg>

      <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
        <Globe2 className="h-4 w-4 text-[#0b5bd3]" />
        Live export lanes from our Zirakpur head office
      </div>
    </div>
  );
}

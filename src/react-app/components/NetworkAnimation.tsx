import { useEffect, useRef, useState } from 'react';

export function NetworkAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const revealRectRef = useRef<SVGRectElement>(null);
  const [nodeStates, setNodeStates] = useState<number[]>([]);
  const [pathOpacity, setPathOpacity] = useState(0);
  const [revealWidth, setRevealWidth] = useState(0);

  const points = [
    [35, 220], [135, 185], [245, 215], [340, 170], [455, 140],
    [570, 155], [690, 125], [805, 135], [930, 120], [1045, 150],
    [1160, 180], [1270, 165], [1375, 125], [1480, 140], [1565, 110]
  ];

  const totalDuration = 12000;
  const pointsDuration = 3000;
  const cableDuration = 3000;

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = (currentTime - startTime) % totalDuration;

      // 1) Apparition des points entre 0s et 3s
      const pointProgress = Math.min(elapsed / pointsDuration, 1);
      const visiblePoints = Math.floor(pointProgress * points.length);

      setNodeStates(
        points.map((_, index) => {
          if (elapsed < totalDuration - 80 && index < visiblePoints) return 1;
          if (elapsed >= pointsDuration && elapsed < totalDuration - 80) return 1;
          return 0;
        })
      );

      // 2) Animation du câble avec clip-path entre 3s et 6s
      if (elapsed < pointsDuration) {
        setPathOpacity(0);
        setRevealWidth(0);
      } else if (elapsed < pointsDuration + cableDuration) {
        const cableProgress = (elapsed - pointsDuration) / cableDuration;
        setPathOpacity(0.65);
        setRevealWidth(1600 * cableProgress);
      } else if (elapsed < totalDuration - 80) {
        setPathOpacity(0.65);
        setRevealWidth(1600);
      } else {
        setPathOpacity(0);
        setRevealWidth(0);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg ref={svgRef} viewBox="0 0 1600 360" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        {/* Masque de révélation pour le câble */}
        <defs>
          <clipPath id="cableReveal">
            <rect ref={revealRectRef} x="0" y="0" width={revealWidth} height="360" />
          </clipPath>
        </defs>

        {/* Fond style DAO */}
        <g className="cad-bg opacity-[0.12]">
          <rect x="110" y="40" width="190" height="120" stroke="#8c8c8c" strokeWidth="1" fill="none" />
          <rect x="360" y="20" width="230" height="140" stroke="#8c8c8c" strokeWidth="1" fill="none" />
          <rect x="650" y="55" width="190" height="130" stroke="#8c8c8c" strokeWidth="1" fill="none" />
          <rect x="960" y="35" width="240" height="135" stroke="#8c8c8c" strokeWidth="1" fill="none" />
          <rect x="1280" y="55" width="210" height="135" stroke="#8c8c8c" strokeWidth="1" fill="none" />

          <polyline points="120,270 260,240 330,285 500,250 650,300" stroke="#8c8c8c" strokeWidth="1" fill="none" />
          <polyline points="850,285 980,245 1120,300 1370,260" stroke="#8c8c8c" strokeWidth="1" fill="none" />

          <line x1="0" y1="95" x2="1600" y2="95" stroke="#8c8c8c" strokeWidth="1" />
          <line x1="0" y1="245" x2="1600" y2="245" stroke="#8c8c8c" strokeWidth="1" />

          <text x="250" y="190" fill="#8c8c8c" fontSize="10">Ø200 PVC</text>
          <text x="250" y="205" fill="#8c8c8c" fontSize="10">P: 1.2%</text>
          <text x="1090" y="185" fill="#8c8c8c" fontSize="10">Ø160 PEHD</text>
          <text x="1090" y="200" fill="#8c8c8c" fontSize="10">P: 0.8%</text>
          <text x="510" y="330" fill="#8c8c8c" fontSize="10">Regard Ø1000</text>
        </g>

        {/* Le câble avec clip-path */}
        <path
          ref={pathRef}
          d="M 35 220
             L 135 185
             L 245 215
             L 340 170
             L 455 140
             L 570 155
             L 690 125
             L 805 135
             L 930 120
             L 1045 150
             L 1160 180
             L 1270 165
             L 1375 125
             L 1480 140
             L 1565 110"
          fill="none"
          stroke="#777"
          strokeWidth="1.8"
          strokeDasharray="8 7"
          opacity={pathOpacity}
          clipPath="url(#cableReveal)"
        />

        {/* Points */}
        <g>
          {points.map((point, index) => (
            <g
              key={index}
              style={{ opacity: nodeStates[index] || 0 }}
            >
              <circle
                cx={point[0]}
                cy={point[1]}
                r="7"
                fill="#f9f9f9"
                stroke="#707070"
                strokeWidth="1.5"
              />
              <line
                x1={point[0] - 5}
                y1={point[1] - 5}
                x2={point[0] + 5}
                y2={point[1] + 5}
                stroke="#707070"
                strokeWidth="1.2"
              />
              <line
                x1={point[0] + 5}
                y1={point[1] - 5}
                x2={point[0] - 5}
                y2={point[1] + 5}
                stroke="#707070"
                strokeWidth="1.2"
              />
              <text
                x={point[0] - 4}
                y={point[1] - 18}
                fill="#777"
                fontSize="12"
                fontWeight="500"
              >
                {index + 1}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

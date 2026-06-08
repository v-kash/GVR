// export function IconRowV4() {
//   const items = [
//     { image: "/icons/leaf.png", title: "100%\nOrganic" },
//     { image: "/icons/sprout.png", title: "Free\nRange" },
//     { image: "/icons/hen.png", title: "Natural\nFeed" },
//     { image: "/icons/heart.png", title: "Protein\nRich" },
//   ];

//   return (
//     <div className="mt-8 flex items-start gap-3 lg:gap-5">
//       {items.map((item, i) => (
//         <div key={i} className="flex items-start gap-3 lg:gap-5">
//           <div className="flex flex-col items-center gap-1.5">
//             {/* Ring */}
//             <div className="relative w-[40px] h-[40px] lg:w-[52px] lg:h-[52px]">
//               <div className="w-full h-full rounded-full border-[1px] border-[#c5db8e] flex items-center justify-center bg-[#edf3de]/50 backdrop-blur-3xl">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-6 h-6 lg:w-8 lg:h-8 object-cover"
//                 />
//               </div>
//             </div>
//             {/* Label */}
//             <p className="text-[8px] lg:text-[10px] font-medium uppercase tracking-[0.08em] lg:tracking-[0.12em] text-[#3D2009] text-center leading-tight whitespace-pre-line">
//               {item.title}
//             </p>
//           </div>

//           {/* Divider */}
//           {i !== items.length - 1 && (
//             <div className="w-[1px] h-[40px] lg:h-[52px] bg-[#3D2009]/20 self-start mt-6 lg:mt-8" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

export function IconRowV4() {
  const items = [
    { image: "/icons/Leaf.svg", title: "100%\nOrganic" },
    { image: "/icons/Sprout.svg", title: "Free\nRange" },
    { image: "/icons/Hen.svg", title: "Natural\nFeed" },
    { image: "/icons/Heart.svg", title: "Protein\nRich" },
  ];

  return (
    <div className="mt-8 flex items-start gap-3 lg:gap-5">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 lg:gap-5">
          <div className="flex flex-col items-center gap-1.5">
            {/* Ring */}
            <div className="relative w-[40px] h-[40px] lg:w-[52px] lg:h-[52px]">
              <div
                className="w-full h-full rounded-full
                border-[1px] border-white/20 lg:border-[#c5db8e]
                bg-white/50 lg:bg-[#edf3de]/50
                backdrop-blur-md flex items-center justify-center"
              >
                <div
                  className="w-7 h-7 lg:w-10 lg:h-10 bg-[#717f3d]"
                  style={{
                    WebkitMaskImage: `url(${item.image})`,
                    maskImage: `url(${item.image})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
              </div>
            </div>
            {/* Label */}
            <p
              className="
              text-[8px] lg:text-[10px] font-medium uppercase leading-tight
              tracking-[0.08em] lg:tracking-[0.12em]
              text-white lg:text-[#3D2009]
              text-center whitespace-pre-line
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] lg:drop-shadow-none
            "
            >
              {item.title}
            </p>
          </div>

          {/* Divider */}
          {i !== items.length - 1 && (
            <div
              className="
              w-[1px] self-start mt-6 lg:mt-8
              h-[40px] lg:h-[52px]
              bg-white/30 lg:bg-[#3D2009]/20
            "
            />
          )}
        </div>
      ))}
    </div>
  );
}

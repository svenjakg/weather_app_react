import React from "react";

export default function ThermometerIcon(props) {
  let test = <i className="fas fa-thermometer-empty Icon"></i>;
  return (
    <div className="TherometerIcon">
      <span
        style={{
          fontSize: "64px",
          position: "absolute",
          top: "-7px",
          left: "30px",
        }}
      >
        {test}
      </span>
    </div>
  );
}

// export default function ThermometerIcon(props) {
//   if (props.temperature < 0) {
//     return (
//       <div className="TherometerIcon">
//         <span className="Icon">
//           <i class="fas fa-thermometer-empty"></i>
//         </span>
//       </div>
//     );
//   } else {
//     if (0 <= props.temperature <= 10) {
//       return (
//         <div className="TherometerIcon">
//           <span className="Icon">
//             <i class="fas fa-thermometer-quarter"></i>
//           </span>
//         </div>
//       );
//     } else {
//       if (10 <= props.temperature <= 20) {
//         return (
//           <div className="TherometerIcon">
//             <span className="Icon">
//               <i class="fas fa-thermometer-half"></i>
//             </span>
//           </div>
//         );
//       } else {
//         if (20 <= props.temperature <= 30) {
//           return (
//             <div className="TherometerIcon">
//               <span className="Icon">
//                 <i class="fas fa-thermometer-three-quarters"></i>
//               </span>
//             </div>
//           );
//         } else {
//           return (
//             <div className="TherometerIcon">
//               <span className="Icon">
//                 <i class="fas fa-thermometer-full"></i>
//               </span>
//             </div>
//           );
//         }
//       }
//     }
//   }
// }

import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./assets/styles/index.scss";

const App = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
// import { useEffect, useState } from "react";
// import { requestAnimals, requestAnimalsWithError, Animal, Query } from "./api";

// // Примеры вызова функций, в консоли можно увидеть возвращаемые результаты

// requestAnimalsWithError({ animal: "", amount: "", limit: 4, offset: 0 }).catch(
//   console.error
// );

// export default function App() {
//   const [animals, setAnimals] = useState<Animal[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [err, setErr] = useState<string | null>(null);
//   const [name, setName] = useState<string>("");
//   const [amount, setAmount] = useState<string | number>("");
//   const [page, setPage] = useState<number>(0);

//   useEffect(() => {
//     setIsLoading(true);
//     requestAnimals({
//       animal: name,
//       amount,
//       limit: 4,
//       offset: page,
//     } as Query)
//       .then((res) => setAnimals(res))
//       .catch((err) => setErr(err.message))
//       .finally(() => {
//         // Устанавливаем isLoading в false после завершения загрузки, независимо от результата
//         setIsLoading(false);
//       });
//   }, [name, amount, page]);

//   let num: number = 0;

//   for (let i = 0; i < animals.length; i += 1) {
//     num += animals[i].amount;
//     console.log(animals[i].animal);
//   }

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Animal"
//         />
//         <input
//           type="number"
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Amount"
//         />

//         <p>
//           <button disabled onClick={() => page > 0 && setPage(page - 1)}>
//             prev
//           </button>
//           <span>page : {page}</span>
//           <button onClick={() => setPage(page + 1)}>next</button>
//         </p>

//         {isLoading ? (
//           "Loading..."
//         ) : (
//           <>
//             {err !== null ? (
//               <p>{err}</p>
//             ) : (
//               <ul>
//                 {animals.map(({ id, animal, amount }) => (
//                   <li key={id}>
//                     <p>
//                       {animal}, {amount}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }

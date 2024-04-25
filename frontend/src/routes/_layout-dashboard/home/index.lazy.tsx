import { createLazyFileRoute } from "@tanstack/react-router";
import { Video } from "../-components/video";

export const Route = createLazyFileRoute("/_layout-dashboard/home/")({
  component: HomePage,
});

function HomePage() {

  return (
    <div className="bg-white">
      <div className="w-full custom-height snap-mandatory snap-y overflow-auto scrollbar-hidden" >
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App" ref={scrollRef}>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Page 1</p>
//       </header>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>page 2</p>
//       </header>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Page 3</p>
//       </header>
//     </div>
//   );
// }
// export default App;

// import GoToButton from './GoToButton'
// import Section from './Section'
// import Text from './Text'

// function App() {
//     const scrollRef = useRef(null)

//     const { goto } = useScrollSnap({ ref: scrollRef, duration: 100 })

//     return (
//         <>
//             <GoToButton goto={goto} />
//             <main ref={scrollRef}>
//                 <Section backgroundColor="#34495e">
//                     <Text textColor="#fff">
//                         Slide 1
//                     </Text>
//                 </Section>
//                 <Section backgroundColor="#2ecc71">
//                     <Text textColor="#fff">
//                         Slide 2
//                     </Text>
//                 </Section>
//                 <Section backgroundColor="#8e44ad">
//                     <Text textColor="#fff">
//                         Slide 3
//                     </Text>
//                 </Section>
//                 <Section backgroundColor="#e74c3c">
//                     <Text textColor="#fff">
//                         Slide 4
//                     </Text>
//                 </Section>
//                 <Section backgroundColor="#f39c12">
//                     <Text textColor="#fff">
//                         Slide 5
//                     </Text>
//                 </Section>
//             </main>
//         </>
//     )
// }

// export default App
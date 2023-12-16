import './projetos.css'

export default function Projetos() {
  return (
    <section className="flex flex-1 flex-col h-full w-full justify-center">
      <h2 className="text-center text-5xl">PROJETOS</h2>
      <div className="flex flex-1 flex-row h-full w-full justify-center">
        <div className="card w-1/4 m-6 -rotate-1 border-2 border-white rounded-3xl" ></div>
        <div className="card w-1/4 m-6 border-2 border-white rounded-3xl" ></div>
        <div className="card w-1/4 m-6 rotate-1 border-2 border-white rounded-3xl" ></div>
      </div>
    </section>


  );
}

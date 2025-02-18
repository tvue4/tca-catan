import './App.css'

const App = (
  // props: any

  // Destructuring...
  {
    timestamp,
    magicNumber
  }
) => {

  console.log(
    "App Component Func Called ! ! !"
    // , typeof(props)
    // , props
  );
  return (
    <>
      <div>
        <h1
          className='text-2xl font-bold'
        >
          TCA Catan
        </h1>
        <p>
          { timestamp } - { magicNumber }
        </p>
        <button
          className='btn btn-secondary btn-active btn-xl'
        >
          Play Five Crowns
        </button>
      </div>
    </>
  )
}

export default App

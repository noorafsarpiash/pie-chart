import { Grid2 } from "@mui/material"
import Navbar from "./components/Navbar"
import Result from "./components/Result"
import SliderComponet from "./components/common/SliderComponet"
import Tenure from "./components/Tenure"
import SliderSelect from "./components/SliderSelect"


function App() {


  return (
    <>
      <div>

        <Navbar />
        <Grid2 container spacing={5}>
          <Grid2>
            <SliderSelect />
            <Tenure />
          </Grid2>
          <Grid2>
            <Result />
          </Grid2>


        </Grid2>
      </div>

    </>
  )
}

export default App

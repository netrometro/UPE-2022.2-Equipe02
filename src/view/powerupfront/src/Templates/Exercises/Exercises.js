import { CreateExercise } from "../../Organism/createExercises/createExercises";
import { Footers } from "../../Organism/Footer/Footer";
import { Headers } from "../../Organism/Headers/Headers";



export function Exercises(){
    return(
        <div>
            <Headers/>
            <CreateExercise/>
            <Footers/>
        </div>
    )
}
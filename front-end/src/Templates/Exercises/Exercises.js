import { CreateExercise } from "../../Organism/createExercises/createExercises";
import { Footers } from "../../Organism/Footer/Footer";
import { Headers } from "../../Organism/Headers/Headers";
import { RequestExercises } from "../../Organism/RequestExercises/RequesteExercises";



export function Exercises(){
    return(
        <div>
            <Headers/>
            <CreateExercise/>
            <RequestExercises/>
            <Footers/>
        </div>
    )
}
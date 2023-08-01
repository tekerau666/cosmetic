import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../modal/slice/couterSlice";
import {getCounterValue} from "../modal/selectors/getCounterValue/getCounterValue";



export const Counter = () => {
    const counterValue = useSelector(getCounterValue)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h1 data-testid='value-title'>value = {counterValue}</h1>
            <Button onClick={increment} data-testid='increment-button'>increment</Button>
            <Button onClick={decrement} data-testid='decrement-button'>decrement</Button>
        </div>
    )
}
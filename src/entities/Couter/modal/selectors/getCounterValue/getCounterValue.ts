import {getCounter} from "../getCounter/getCounter";
import {createSelector} from "@reduxjs/toolkit";
import {CounterSchema} from "entities/Couter";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)
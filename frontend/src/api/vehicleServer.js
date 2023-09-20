import React from "react";
import axios from "axios";

const API_URL = ''

export const listVehicles = async () => {
    return await axios.get(API_URL);
}

export const createVehicle = async (newVehicle) => {
    return await axios.post(API_URL, newVehicle)
}
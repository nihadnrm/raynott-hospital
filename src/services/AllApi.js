import base_url from "./base_url";
import commonApi from "./commonApi";


export const registerApi = async (data) => {

    return await commonApi(`${base_url}/register`,"POST","", data)

}
export const loginApi = async (data) => {

    return await commonApi(`${base_url}/login`,"POST","",data)
}

export const CreateAppointmentApi = async (data) => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/createAppointment`,"POST",header,data)

}
export const getAppointmentApi = async () => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/getAppointments`,"GET",header)

}
export const addTestApi = async (data) => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/bookTest`,"POST",header,data)

}
export const getTestApi = async () => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/getTests`,"GET",header)

}

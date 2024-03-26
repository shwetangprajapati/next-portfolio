import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastConfigSuccess = {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
};

const toastConfigError = {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
};

// Function to display success toast
export const successToast = (message) => {
  toast.success(message, toastConfigSuccess);
};

// Function to display error toast
export const errorToast = (message) => {
  toast.error(message, toastConfigError);
};

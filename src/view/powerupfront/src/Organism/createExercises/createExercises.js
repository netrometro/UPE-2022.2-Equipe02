import { Link } from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { TreinoForm } from "../TreinoForms/treinoForms";
import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


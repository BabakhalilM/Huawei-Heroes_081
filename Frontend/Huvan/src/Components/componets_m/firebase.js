
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdiwJZ-jK2Ju1YjeWKxDIoofO8BHhVllY",
  authDomain: "huawei-heroes081.firebaseapp.com",
  databaseURL: "https://huawei-heroes081-default-rtdb.firebaseio.com",
  projectId: "huawei-heroes081",
  storageBucket: "huawei-heroes081.appspot.com",
  messagingSenderId: "457276554402",
  appId: "1:457276554402:web:84df22529b2efe96702bfb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

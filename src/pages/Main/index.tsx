import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Section1Lending from "../../components/Section__1__lending/Section1Lending";
import Section2Lending from "../../components/Section__2__Lending/Section2Lending";
import Section3Lending from "../../components/Section__3__Lending/Section3Lending";
import Section4Lending from "../../components/Section__4__lending/Section4Lending";
import Section5Lending from "../../components/Section__5__lending/Section5Lending";
import Footer from "../../components/Footer/Footer";
import SignInForm from "../../components/SignInForm/SignInForm";
import classes from "./index.module.css";
import EditProfile from "../../components/EditProfile/EditProfile";
import PublishedSuccessfully from "../../components/PublishedSuccessfully/PublishedSuccessfully";

export const Main = () => {
    const [showSignInModal, setShowSignInModal] = useState(false);

    const handleSignInClick = () => {
        setShowSignInModal(true);
    };

    const handleCloseModal = () => {
        setShowSignInModal(false);
    };

    return (
        <div>
            <Header />
            {/*<EditProfile/>*/}
            <Section1Lending/>
            <Section2Lending/>
            <Section3Lending/>
            <Section4Lending/>
            <Section5Lending/>
            <Footer/>
        </div>
    )
}


// link react dom ---
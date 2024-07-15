import "react-toastify/dist/ReactToastify.css";

// Your application code
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import styles from "./index.module.css";
import Layout from "components/Layout/Layout";
import AuthenticatedRoute from "pages/AuthenticationRoute/AuthenticationRoute";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import ManageDataPage from "pages/ManageDataPage/ManageDataPage";
import AddDataPage from "pages/AddDataPage/AddDataPage";
import QuestionPage from "pages/QuestionsPage/QuestionPage";
import AddGeneralQuestionPage from "pages/GeneralQuestionsPages/AddGeneralQuestionPage";
import ManageGeneralQuestionsPage from "pages/GeneralQuestionsPages/ManageGeneralQuestionsPage";
import AddPrivateQuestionPage from "pages/PrivateQuestionPages/AddPrivateQuestionPage";
import ManagePrivateQuestionsPage from "pages/PrivateQuestionPages/ManagePrivateQuestionsPage";
import AddEstimateQuestionPage from "pages/EstimateQuestionsPages/AddEstimateQuestionPage";
import ManageEstimateQuestionsPage from "pages/EstimateQuestionsPages/ManageEstimateQuestionsPage";
import ImagePage from "pages/ImagePage/ImagePage";
import AddImagesPage from "pages/ImagesPages/AddImagesPage";
import ManageImagesPage from "pages/ImagesPages/ManageImagesPage";
import VideoPage from "pages/VideoPage/VideoPage";
import AddVideosPage from "pages/VideosPages/AddVideosPage";
import ManageVideosPage from "pages/VideosPages/ManageVideosPage";
import QuizPage from "pages/QuizPage/QuizPage";
import GeneralQuestionModule from "features/QuizModule/components/CategoryModules/GeneralQuestionModule/GeneralQuestionModule";
import PrivateQuestionModule from "features/QuizModule/components/CategoryModules/PrivateQuestionModule/PrivateQuestionModule";
import GuessImageModule from "features/QuizModule/components/CategoryModules/GuessImageModule/GuessImageModule";
import BattleRoyalPage from "pages/BattleRoyalPage/BattleRoyalPage";
import { QuizStatusProvider } from "context/useQuizStatus";
import { UserDataProvider } from "context/useUserData";
import { ToastContainer } from "react-toastify";
import { QuizDataProvider } from "context/useQuizData";
import { ActionProvider } from "context/useAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <AuthenticatedRoute>
            <HomePage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/manageData",
        element: (
          <AuthenticatedRoute>
            <ManageDataPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/addData",
        element: (
          <AuthenticatedRoute>
            <AddDataPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/questions/add",
        element: (
          <AuthenticatedRoute>
            <QuestionPage type="add" />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/questions/manage",
        element: (
          <AuthenticatedRoute>
            <QuestionPage type="manage" />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/questions/add/general",
        element: (
          <AuthenticatedRoute>
            <AddGeneralQuestionPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/questions/manage/general",
        element: (
          <AuthenticatedRoute>
            <ManageGeneralQuestionsPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/questions/add/private",
        element: (
          <AuthenticatedRoute>
            <AddPrivateQuestionPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/questions/manage/private",
        element: (
          <AuthenticatedRoute>
            <ManagePrivateQuestionsPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/questions/add/estimate",
        element: (
          <AuthenticatedRoute>
            <AddEstimateQuestionPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/questions/manage/estimate",
        element: (
          <AuthenticatedRoute>
            <ManageEstimateQuestionsPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/images/add",
        element: (
          <AuthenticatedRoute>
            <ImagePage type={"add"} />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/images/manage",
        element: (
          <AuthenticatedRoute>
            <ImagePage type={"manage"} />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/images/add/guess",
        element: (
          <AuthenticatedRoute>
            <AddImagesPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/images/manage/guess",
        element: (
          <AuthenticatedRoute>
            <ManageImagesPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/videos/add",
        element: (
          <AuthenticatedRoute>
            <VideoPage type={"add"} />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/videos/manage",
        element: (
          <AuthenticatedRoute>
            <VideoPage type={"manage"} />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/videos/add/zoom",
        element: (
          <AuthenticatedRoute>
            <AddVideosPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/videos/manage/zoom",
        element: (
          <AuthenticatedRoute>
            <ManageVideosPage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/quizmodule",
        element: <QuizPage />,
      },
      {
        path: "/quizmodule/general",
        element: <GeneralQuestionModule />,
      },
      {
        path: "/quizmodule/private",
        element: <PrivateQuestionModule />,
      },
      {
        path: "/quizmodule/guess",
        element: <GuessImageModule />,
      },
      {
        path: "/quizmodule/vs",
        element: <BattleRoyalPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QuizStatusProvider>
    <UserDataProvider>
      <QuizDataProvider>
        <ActionProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </ActionProvider>
      </QuizDataProvider>
    </UserDataProvider>
  </QuizStatusProvider>
);

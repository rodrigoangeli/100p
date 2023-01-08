//Anchors
import Home from "../routes/home/Home";
import NotFound from "../routes/NotFound";
import Layout from "../layout/layout";

//Projects
import Calendar from "routes/projects/simple-projects/calendar/Calendar";
import Quiz from "routes/projects/simple-projects/quiz/Quiz";
import Calculator from "routes/projects/simple-projects/calculator/Calculator";
import WeatherWebsite from "routes/projects/simple-projects/weather-website/WeatherWebsite";
import TodoList from "routes/projects/simple-projects/todo-list/TodoList";
import Pomodoro from "routes/projects/simple-projects/pomodoro/Pomodoro";
import GridPicturesAnimals from "routes/projects/simple-projects/grid-pictures-animals/GridPicturesAnimals";

import Chess from "routes/projects/games/chess/Chess";
import ZombieGame from "routes/projects/games/2d-zombie-game/ZombieGame";
import Minesweeper from "routes/projects/games/minesweeper/Minesweeper";
import Mario from "routes/projects/games/mario/Mario";
import BattleShip from "routes/projects/games/battleship/BattleShip";
import TicTacToe from "routes/projects/games/tic-tac-toe/TicTacToe";
import RockPaperScissors from "routes/projects/games/rock-paper-scissors/RockPaperScissors";
import OwnPlatformerGame from "routes/projects/games/own-platformer-game/OwnPlatformerGame";
import ProgrammingConcept from "routes/projects/games/programming-concept/ProgrammingConcept";
import Hangman from "routes/projects/games/hangman/Hangman";
import Pacman from "routes/projects/games/pacman/Pacman";
import PingPong from "routes/projects/games/ping-pong/PingPong";
import Tetris from "routes/projects/games/tetris/Tetris";
import GuessMySketch from "routes/projects/games/guess-my-sketch/GuessMySketch";
import EmulatorRetroGames from "routes/projects/games/emulator-retro-games/EmulatorRetroGames";

import ZipPostalCodeLookup from "routes/projects/networking/zip-postal-code-lookup/ZipPostalCodeLookup";
import CountryIPLookup from "routes/projects/networking/country-lookup/CountryIPLookup";

import FlexBoxGenerator from "routes/projects/personal-tools/flex-box-generator/FlexBoxGenerator";
import CssGridGenerator from "routes/projects/personal-tools/css-grid-generator/CssGridGenerator";
import UISelect from "routes/projects/personal-tools/UISelect/UISelect";
import CssLoaders from "routes/projects/personal-tools/css-loaders/CssLoaders";
import NoteTaker from "routes/projects/personal-tools/note-taker/NoteTaker";
import ClipPathGenerator from "routes/projects/personal-tools/clip-generator/ClipPathGenerator";
import NoteTakerForProgrammers from "routes/projects/personal-tools/note-taker-for-programmers/NoteTakerForProgrammers";
import BudgetTracker from "routes/projects/personal-tools/budget-tracker/BudgetTracker";
import ScriptToOrderPizza from "routes/projects/personal-tools/script-to-order-pizza/ScriptToOrderPizza";
import KanbanBoard from "routes/projects/personal-tools/kanban-board/KanbanBoard";
import ExportNotionToBlog from "routes/projects/personal-tools/export-notion-to-blog/ExportNotionToBlog";

import OnlineWhiteboard from "routes/projects/online/online-whiteboard/OnlineWhiteboard";
import GamifiedHabitTracker from "routes/projects/online/gamified-habit-tracker/GamifiedHabitTracker";
import RealTimeChatApp from "routes/projects/online/real-time-chat-app/RealTimeChatApp";
import VideoChat from "routes/projects/online/video-chat/VideoChat";

import PasswordCracker from "routes/projects/machine-learning/password-cracker/PasswordCracker";
import ConvertSignLanguageToText from "routes/projects/machine-learning/convert-sign-language-to-text/ConvertSignLanguageToText";
import HandwrittenTodosToGoogleCalendar from "routes/projects/machine-learning/handwritten-todos-to-google-calendar/HandwrittenTodosToGoogleCalendar";
import GradeYourOwnEssay from "routes/projects/machine-learning/grade-your-own-essay/GradeYourOwnEssay";
import InsertAppointmentsGoogleCalendar from "routes/projects/machine-learning/insert-appointments-google-calendar/InsertAppointmentsGoogleCalendar";

import DesignFreeFrontendMentor from "routes/projects/clone-front/design-free-frontend-mentor/DesignFreeFrontendMentor";
import DesignOnAwwwards from "routes/projects/clone-front/design-on-awwwards/DesignOnAwwwards";
import RebuildNetflix from "routes/projects/clone-front/rebuild-netflix/RebuildNetflix";
import RebuildFacebook from "routes/projects/clone-front/rebuild-facebook/RebuildFacebook";
import RebuildInstagram from "routes/projects/clone-front/rebuild-instagram/RebuildInstagram";
import RebuildGoogleCalendar from "routes/projects/clone-front/rebuild-google-calendar/RebuildGoogleCalendar";
import RebuildTrello from "routes/projects/clone-front/rebuild-trello/RebuildTrello";
import RebuildFeatherIcons from "routes/projects/clone-front/rebuild-feather-icons/RebuildFeatherIcons";

import PhotographyPortfolio from "routes/projects/cool-projects/photography-portfolio/PhotographyPortfolio";
import PersonalPortfolio from "routes/projects/cool-projects/personal-portfolio/PersonalPortfolio";
import GPATracker from "routes/projects/cool-projects/tracker/GPATracker";
import CssCube from "routes/projects/cool-projects/css-cube/CssCube";
import AudioVisualizer from "routes/projects/cool-projects/audio-visualizer/AudioVisualizer";
import GameOfLife from "routes/projects/cool-projects/game-of-life/GameOfLife";
import ControlTrelloDroneWithNode from "routes/projects/cool-projects/control-trello-drone-with-node/ControlTrelloDroneWithNode";
import PersonalBlog from "routes/projects/cool-projects/personal-blog/PersonalBlog";
import PasswordGenerator from "routes/projects/cool-projects/password-generator/PasswordGenerator";
import FileOrganizer from "routes/projects/cool-projects/file-organizer/FileOrganizer";
import PageScraper from "routes/projects/cool-projects/page-scraper/PageScraper";
import AlarmClock from "routes/projects/cool-projects/alarm-clock/AlarmClock";
import MP3Player from "routes/projects/cool-projects/mp3-player/MP3Player";
import GifCreator from "routes/projects/cool-projects/gif-creator/GifCreator";
import LearningPlatform from "routes/projects/cool-projects/learning-platform/LearningPlatform";
import MarkdownToHTML from "routes/projects/cool-projects/markdown-to-html/MarkdownToHTML";
import DesktopGUI from "routes/projects/cool-projects/desktop/DesktopGUI";
import ContentAggregator from "routes/projects/cool-projects/content-aggregator/ContentAggregator";
import RecipeForHomeIngredients from "routes/projects/cool-projects/recipe-for-home-ingredients/RecipeForHomeIngredients";
import StockPorfolioTracker from "routes/projects/cool-projects/stock-porfolio-tracker/StockPorfolioTracker";
import VideoEditor from "routes/projects/cool-projects/video-editor/VideoEditor";

import TwitterBot from "routes/projects/bots/twitter-bot/TwitterBot";
import SlackBot from "routes/projects/bots/slack-bot/SlackBot";
import DiscordBot from "routes/projects/bots/discord-bot/DiscordBot";
import InstagramBot from "routes/projects/bots/instagram-bot/InstagramBot";
import BotHelpsWithDisabilities from "routes/projects/bots/bot-helps-with-disabilities/BotHelpsWithDisabilities";
import ApplyLinkedinEasyApplyJobs from "routes/projects/bots/apply-linkedin-easy-apply-jobs/ApplyLinkedinEasyApplyJobs";

import RomanNumeralConverters from "routes/projects/challenges/roman-numeral-converters/RomanNumeralConverters";
import CreditCardValidator from "routes/projects/challenges/credit-card-validator/CreditCardValidator";

export const anchors = [
  {
    path: "/",
    element: <Layout noHeader />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const projects = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "simple-projects",
        category: "Simple Projects",
        color: "wheat",
        children: [
          {
            path: "calendar",
            title: "Calendar",
            status: "progress",
            element: <Calendar />,
          },
          {
            path: "quiz",
            title: "Quiz",
            status: "done",
            element: <Quiz />,
          },
          {
            path: "calculator",
            title: "Calculator",
            status: "done",
            element: <Calculator />,
          },
          {
            path: "weather-website",
            title: "Weather Website",
            status: "done",
            element: <WeatherWebsite />,
          },
          {
            path: "todo-list",
            title: "Todo List",
            status: "done",
            element: <TodoList />,
          },
          {
            path: "pomodoro",
            title: "Pomodoro",
            status: "done",
            element: <Pomodoro />,
          },
          {
            path: "grid-pictures-animals",
            title: "Grid Pictures Animals",
            status: "done",
            element: <GridPicturesAnimals />,
          },
        ],
      },
      {
        path: "challenges",
        category: "Challenges",
        color: "lightskyblue",
        children: [
          {
            path: "roman-numeral-converters",
            title: "Roman Numeral Converters",
            status: "done",
            element: <RomanNumeralConverters />,
          },
          {
            path: "credit-card-validator",
            title: "Credit Card Validator",
            status: "done",
            element: <CreditCardValidator />,
          },
        ],
      },
      {
        path: "networking",
        category: "Networking",
        color: "#fba3ff",
        children: [
          {
            path: "zip-postal-code-lookup",
            title: "Zip Postal Code Lookup",
            status: "done",
            element: <ZipPostalCodeLookup />,
          },
          {
            path: "country-lookup",
            title: "Country Lookup",
            status: "done",
            element: <CountryIPLookup />,
          },
        ],
      },
      {
        path: "personal-tools",
        category: "Personal Tools",
        color: "#ff968e",
        children: [
          {
            path: "flex-box-generator",
            title: "Flex Box Generator",
            status: "tbd",
            element: <FlexBoxGenerator />,
          },
          {
            path: "css-grid-generator",
            title: "CSS Grid Generator",
            status: "tbd",
            element: <CssGridGenerator />,
          },
          {
            path: "UISelect",
            title: "UI Select",
            status: "tbd",
            element: <UISelect />,
          },
          {
            path: "css-loaders",
            title: "CSS Loaders",
            status: "tbd",
            element: <CssLoaders />,
          },
          {
            path: "note-taker",
            title: "Note Taker",
            status: "tbd",
            element: <NoteTaker />,
          },
          {
            path: "clip-generator",
            title: "Clip-path Generator",
            status: "tbd",
            element: <ClipPathGenerator />,
          },
          {
            path: "note-taker-for-programmers",
            title: "Note Taker for Programmers",
            status: "tbd",
            element: <NoteTakerForProgrammers />,
          },
          {
            path: "budget-tracker",
            title: "Budget Tracker",
            status: "tbd",
            element: <BudgetTracker />,
          },
          {
            path: "script-to-order-pizza",
            title: "Script to Order Pizza",
            status: "tbd",
            element: <ScriptToOrderPizza />,
          },
          {
            path: "kanban-board",
            title: "Kanban Board",
            status: "tbd",
            element: <KanbanBoard />,
          },
          {
            path: "export-notion-to-blog",
            title: "Export Notion to Blog",
            status: "tbd",
            element: <ExportNotionToBlog />,
          },
        ],
      },
      {
        path: "cool-projects",
        category: "Cool Projects",
        color: "#a06af9",
        children: [
          {
            path: "photography-portfolio",
            title: "Photography Portfolio",
            status: "tbd",
            element: <PhotographyPortfolio />,
          },
          {
            path: "personal-portfolio",
            title: "Personal Portfolio",
            status: "tbd",
            element: <PersonalPortfolio />,
          },
          {
            path: "tracker",
            title: "G.P.A Tracker",
            status: "tbd",
            element: <GPATracker />,
          },
          {
            path: "emulator-retro-games",
            title: "Emulator Retro Games",
            status: "tbd",
            element: <EmulatorRetroGames />,
          },
          {
            path: "css-cube",
            title: "CSS Cube",
            status: "tbd",
            element: <CssCube />,
          },
          {
            path: "audio-visualizer",
            title: "Audio Visualizer",
            status: "tbd",
            element: <AudioVisualizer />,
          },
          {
            path: "game-of-life",
            title: "Game Of Life",
            status: "tbd",
            element: <GameOfLife />,
          },
          {
            path: "control-trello-drone-with-node",
            title: "Control Trello Drone With Node",
            status: "tbd",
            element: <ControlTrelloDroneWithNode />,
          },
          {
            path: "personal-blog",
            title: "Personal Blog",
            status: "tbd",
            element: <PersonalBlog />,
          },
          {
            path: "password-generator",
            title: "Password Generator",
            status: "tbd",
            element: <PasswordGenerator />,
          },
          {
            path: "file-organizer",
            title: "File Organizer",
            status: "tbd",
            element: <FileOrganizer />,
          },
          {
            path: "page-scraper",
            title: "Page Scraper",
            status: "tbd",
            element: <PageScraper />,
          },
          {
            path: "alarm-clock",
            title: "Alarm Clock",
            status: "tbd",
            element: <AlarmClock />,
          },
          {
            path: "3-player",
            title: "MP3 Player",
            status: "tbd",
            element: <MP3Player />,
          },
          {
            path: "gif-creator",
            title: "Gif Creator",
            status: "tbd",
            element: <GifCreator />,
          },
          {
            path: "learning-platform",
            title: "Learning Platform",
            status: "tbd",
            element: <LearningPlatform />,
          },
          {
            path: "markdown-to",
            title: "Markdown to HTML",
            status: "tbd",
            element: <MarkdownToHTML />,
          },
          {
            path: "desktop",
            title: "Desktop GUI",
            status: "tbd",
            element: <DesktopGUI />,
          },
          {
            path: "content-aggregator",
            title: "Content Aggregator",
            status: "tbd",
            element: <ContentAggregator />,
          },
          {
            path: "recipe-for-home-ingredients",
            title: "Recipe for Home Ingredients",
            status: "tbd",
            element: <RecipeForHomeIngredients />,
          },
          {
            path: "stock-porfolio-tracker",
            title: "Stock Porfolio Tracker",
            status: "tbd",
            element: <StockPorfolioTracker />,
          },
          {
            path: "video-editor",
            title: "Video Editor",
            status: "tbd",
            element: <VideoEditor />,
          },
        ],
      },
      {
        path: "games",
        category: "Games",
        color: "#a5f59c",
        children: [
          {
            path: "chess",
            title: "Chess",
            status: "tbd",
            element: <Chess />,
          },
          {
            path: "2d-zombie-game",
            title: "2D Zombie Game",
            status: "tbd",
            element: <ZombieGame />,
          },
          {
            path: "minesweeper",
            title: "Minesweeper",
            status: "tbd",
            element: <Minesweeper />,
          },
          {
            path: "mario",
            title: "Mario",
            status: "tbd",
            element: <Mario />,
          },
          {
            path: "battleship",
            title: "BattleShip",
            status: "tbd",
            element: <BattleShip />,
          },
          {
            path: "tic-tac-toe",
            title: "Tic-Tac-Toe",
            status: "tbd",
            element: <TicTacToe />,
          },
          {
            path: "rock-paper-scissors",
            title: "Rock-Paper-Scissors",
            status: "tbd",
            element: <RockPaperScissors />,
          },
          {
            path: "own-platformer-game",
            title: "Own Platformer Game",
            status: "tbd",
            element: <OwnPlatformerGame />,
          },
          {
            path: "programming-concept",
            title: "Programming Concept",
            status: "tbd",
            element: <ProgrammingConcept />,
          },
          {
            path: "hangman",
            title: "Hangman",
            status: "tbd",
            element: <Hangman />,
          },
          {
            path: "pacman",
            title: "Pacman",
            status: "tbd",
            element: <Pacman />,
          },
          {
            path: "ping-pong",
            title: "Ping Pong",
            status: "tbd",
            element: <PingPong />,
          },
          {
            path: "tetris",
            title: "Tetris",
            status: "tbd",
            element: <Tetris />,
          },
          {
            path: "guess-my-sketch",
            title: "Guess My Sketch",
            status: "tbd",
            element: <GuessMySketch />,
          },
        ],
      },
      {
        path: "clone-front",
        category: "Clone Front",
        color: "#94f0f0",
        children: [
          {
            path: "rebuild-netflix",
            title: "Rebuild Netflix",
            status: "tbd",
            element: <RebuildNetflix />,
          },
          {
            path: "rebuild-facebook",
            title: "Rebuild Facebook",
            status: "tbd",
            element: <RebuildFacebook />,
          },
          {
            path: "rebuild-instagram",
            title: "Rebuild Instagram",
            status: "tbd",
            element: <RebuildInstagram />,
          },
          {
            path: "rebuild-google-calendar",
            title: "Rebuild Google Calendar",
            status: "tbd",
            element: <RebuildGoogleCalendar />,
          },
          {
            path: "rebuild-trello",
            title: "Rebuild Trello",
            status: "tbd",
            element: <RebuildTrello />,
          },
          {
            path: "rebuild-feather-icons",
            title: "Rebuild Feather Icons",
            status: "tbd",
            element: <RebuildFeatherIcons />,
          },
          {
            path: "design-free-frontend-mentor",
            title: "Design Free Frontend Mentor",
            status: "tbd",
            element: <DesignFreeFrontendMentor />,
          },
          {
            path: "design-on-awwwards",
            title: "Design On Awwwards",
            status: "tbd",
            element: <DesignOnAwwwards />,
          },
        ],
      },
      {
        path: "online",
        category: "Online",
        color: "#5d9a56",
        children: [
          {
            path: "online-whiteboard",
            title: "Online Whiteboard",
            status: "tbd",
            element: <OnlineWhiteboard />,
          },
          {
            path: "gamified-habit-tracker",
            title: "Gamified Habit Tracker",
            status: "tbd",
            element: <GamifiedHabitTracker />,
          },
          {
            path: "real-time-chat-app",
            title: "Real Time Chat App",
            status: "tbd",
            element: <RealTimeChatApp />,
          },
          {
            path: "video-chat",
            title: "Video Chat",
            status: "tbd",
            element: <VideoChat />,
          },
        ],
      },
      {
        path: "machine-learning",
        category: "Machine Learning",
        color: "#ffdd72",
        children: [
          {
            path: "password-cracker",
            title: "Password Cracker",
            status: "tbd",
            element: <PasswordCracker />,
          },
          {
            path: "convert-sign-language-to-text",
            title: "Convert Sign Language to Text",
            status: "tbd",
            element: <ConvertSignLanguageToText />,
          },
          {
            path: "handwritten-todos-to-google-calendar",
            title: "Handwritten Todos to Google Calendar",
            status: "tbd",
            element: <HandwrittenTodosToGoogleCalendar />,
          },
          {
            path: "grade-your-own-essay",
            title: "Grade Your Own Essay",
            status: "tbd",
            element: <GradeYourOwnEssay />,
          },
          {
            path: "insert-appointments-google-calendar",
            title: "Insert Appointments Google Calendar",
            status: "tbd",
            element: <InsertAppointmentsGoogleCalendar />,
          },
        ],
      },
      {
        path: "bots",
        category: "Bots",
        color: "#386dd9",
        children: [
          {
            path: "twitter-bot",
            title: "Twitter Bot",
            status: "tbd",
            element: <TwitterBot />,
          },
          {
            path: "slack-bot",
            title: "Slack Bot",
            status: "tbd",
            element: <SlackBot />,
          },
          {
            path: "discord-bot",
            title: "Discord Bot",
            status: "tbd",
            element: <DiscordBot />,
          },
          {
            path: "instagram-bot",
            title: "Instagram Bot",
            status: "tbd",
            element: <InstagramBot />,
          },
          {
            path: "bot-helps-with-disabilities",
            title: "Bot Helps With Disabilities",
            status: "tbd",
            element: <BotHelpsWithDisabilities />,
          },
          {
            path: "apply-linkedin-easy-apply-jobs",
            title: "Apply Linkedin Easy Apply Jobs",
            status: "tbd",
            element: <ApplyLinkedinEasyApplyJobs />,
          },
        ],
      },
    ],
  },
];

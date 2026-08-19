import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SectionPage from "./pages/SectionPage";

// RHZ LAB shell: every core module has a direct route and a reusable operational page.
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/learn"><SectionPage section="learn" /></Route>
      <Route path="/challenges"><SectionPage section="challenges" /></Route>
      <Route path="/labs"><SectionPage section="labs" /></Route>
      <Route path="/machines"><SectionPage section="machines" /></Route>
      <Route path="/academy"><SectionPage section="academy" /></Route>
      <Route path="/paths"><SectionPage section="paths" /></Route>
      <Route path="/leaderboard"><SectionPage section="leaderboard" /></Route>
      <Route path="/terminal"><SectionPage section="terminal" /></Route>
      <Route path="/notes"><SectionPage section="notes" /></Route>
      <Route path="/bookmarks"><SectionPage section="bookmarks" /></Route>
      <Route path="/rooms"><SectionPage section="rooms" /></Route>
      <Route path="/writeups"><SectionPage section="writeups" /></Route>
      <Route path="/profile"><SectionPage section="profile" /></Route>
      <Route path="/progress"><SectionPage section="progress" /></Route>
      <Route path="/creator"><SectionPage section="creator" /></Route>
      <Route path="/competitions"><SectionPage section="competitions" /></Route>
      <Route path="/settings"><SectionPage section="settings" /></Route>
      <Route path="/status"><SectionPage section="status" /></Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster theme="dark" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

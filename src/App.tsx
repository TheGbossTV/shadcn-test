import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Popcorn } from "lucide-react";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="p-4">
      <Button onClick={handleClick}>Click me</Button>
      <Alert
        className={`${
          showAlert ? "opacity-100 duration-500" : "opacity-0 duration-2000"
        } transition-opacity w-1/2 fixed left-1/2 -translate-x-1/2 top-4 z-50`}
      >
        <Popcorn className="size-4" />
        <AlertTitle>Movie Time</AlertTitle>
        <AlertDescription>This is an error message</AlertDescription>
      </Alert>
    </div>
  );
}

export default App;

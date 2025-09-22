import AuthRoutes from './routes/AuthRoutes';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-gray-300 to-cyan-500 dark:bg-gradient-to-br dark:from-cyan-900 dark:via-gray-600 dark:to-cyan-700 dark:text-gray-100 flex flex-col">
      <DarkModeToggle />
      <div className="flex-1 w-full mx-auto max-w-screen-2xl px-2 sm:px-4 md:px-8">
        <AuthRoutes />
      </div>
      {/* <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      /> */}
    </div>
  );
};

export default App;
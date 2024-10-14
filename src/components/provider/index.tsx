import { ThemeProvider } from "./theme-provider";

type ProviderProps = {
    children: React.ReactNode;
    theme: "light"|"dark"|"system";
};

const Provider = ({ 
    children,
    theme, 
}: ProviderProps) => {

    return (
        <div>
            <ThemeProvider
                attribute="class"
                defaultTheme={theme}
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </div>
    );
};

export default Provider;

import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from './application/store';
import { queryClient } from './infra/config/react-query/queryClient';
import { AuthProvider } from './presentation/containers/AuthProvider';
import { router } from './routes/router';
import { theme } from './theme';
import { GlobalStyle } from './theme/style/globalStyle';
import './theme/style/reset.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <RouterProvider router={router} />
                    </AuthProvider>
                </QueryClientProvider>
            </Provider>
        </ThemeProvider>
    );
}

export default App;

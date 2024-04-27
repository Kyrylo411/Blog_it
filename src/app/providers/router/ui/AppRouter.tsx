import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutUsPage } from 'pages/AboutUsPage';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    path={path}
                    key={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);

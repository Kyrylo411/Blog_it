import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export function PageLoader({ className }:PageLoaderProps) {
    return (
        <div className={classNames(cls.PageLoader, {}, [])}>
            <Loader />
        </div>

    );
}

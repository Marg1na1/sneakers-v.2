export const withEmptyPage = (Component: any) => {
    return (props: any) => {
        return (
            <Component {...props} />
        );
    }
}
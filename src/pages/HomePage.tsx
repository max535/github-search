import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
    const {isLoading, isError, data} = useSearchUsersQuery('max535');

    return (
        <div>
            Home
        </div>
    );
}

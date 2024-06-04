import { useRouteError } from "react-router-dom";

/**
 * Renders an error page when a routing error occurs.
 * 
 * @returns JSX.Element
 */
export default function ErrorPage(): JSX.Element {
  const error: RouteError = useRouteError() || {};
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}

/**
 * Represents an error object returned by the `useRouteError` hook.
 */
interface RouteError {
  statusText?: string;
  message?: string;
}

import { useAlert } from "src/hooks";
import { useEffect, useState } from "react";
import PageWrapper from "src/components/PageWrapper";
import { get } from "src/util";

export default function ApiTest() {
  const { setAlert } = useAlert();
  const [apiResult, setApiResult] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const setup = async () => {
      const { data, error } = await get("/api/test");
      if (error) {
        setAlert({ type: "error", message: "Error fetching from API." });
        setError(true);
      } else {
        setAlert({ type: "success", message: "It works!" });
        setApiResult(JSON.stringify(data));
      }
    };
    setError(false);
    setup();
  }, [setAlert]);

  return (
    <PageWrapper title="API Test">
      <p className="ph4 f4 fw5 dark-gray tc">
        The API returned: <code>{apiResult}</code>
        {error ? (
          <>
            <br />
            <br />
            Looks like something is off. Did you setup your database correctly?
          </>
        ) : (
          <>
            <br />
            <br />
            All clear!
          </>
        )}
      </p>
    </PageWrapper>
  );
}

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface SwitchButtonAndLoaderProps {
  type: string;
  hidden: boolean;
}

const SwitchButtonAndLoader: React.FC<SwitchButtonAndLoaderProps> = ({
  type,
  hidden,
}) => {
  const [info, setInfo] = useState<string | null>(null);
  const router = useRouter();
  const handleSwitch = () => {
    router.push(`/${type}/pokemon/`, undefined, { shallow: false });
  };
  useEffect(() => {
    const handleRouteChange = () => {
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? "with" : "without"
      //   } shallow routing ${state}`
      // );
      setInfo(`LOADING ${type.toUpperCase()} PAGE`);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      setInfo(null);
    };
  }, []);

  return (
    <>
      {info === null ? (
        hidden === false && (
          <Button disabled={hidden} colorScheme="teal" onClick={handleSwitch}>
            SWITCH TO {type.toUpperCase()}
          </Button>
        )
      ) : (
        <Button
          isLoading
          loadingText={info}
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      )}
    </>
  );
};

export default SwitchButtonAndLoader;

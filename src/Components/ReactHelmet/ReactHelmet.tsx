import { Helmet } from "react-helmet";
import { HelmetMainProps } from "./interface";

const ReactHelmet: React.FC<HelmetMainProps> = ({ detail }) => {
  const { title } = detail;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || "MyTMDB App"}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
};

export default ReactHelmet;

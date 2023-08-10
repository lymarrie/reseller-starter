/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Pages system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import * as React from "react";
import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
} from "@yext/pages";
import { isProduction } from "@yext/pages/util";
import "../index.css";
import Favicon from "../assets/images/yext-favicon.ico";
import BannerImage from "../assets/images/yext-banner.png";
import About from "../components/About";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContactSection from "../components/ContactSection";
import Details from "../components/Details";
import Hours from "../components/Hours";
import PageLayout from "../components/PageLayout";
import EditTool from "../components/EditTool";

import { Image } from "@yext/react-components";


/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "Location",
    // Defines the scope of entities that qualify for this stream.
    // You can use entityTypes, savedFilterIds, and/or entityIds
    filter: {
      entityIds: [YEXT_PUBLIC_LOCATION_ENTITY_ID],
    },
    // Specifies the exact data that each generated document will contain.
    // This data is passed in directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "services",
      "photoGallery",
      "paymentOptions",
      "emails",
    ],
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: [YEXT_PUBLIC_LOCATION_LOCALE_CODE],
      primary: false,
    },
    transform: {
      replaceOptionValuesWithDisplayNames: ["paymentOptions"],
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: To preview production URLs locally, you must return document.slug from this function
 * and ensure that each entity has the slug field pouplated.
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};


/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
  relativePrefixToRoot
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: relativePrefixToRoot + Favicon,
        },
      },
    ],
  };
};


/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  __meta,
  relativePrefixToRoot,
  document,
}) => {
  const {
    name,
    address,
    hours,
    mainPhone,
    services,
    description,
    emails,
    photoGallery
  } = document;

  const data = { mainPhone, emails }

  return (
    <>
      <PageLayout data={data}>
        <Banner name={name} photoGallery={photoGallery} />
        <About description={description} />
        {hours && <Hours title={"Hours of Operation"} hours={hours} />}
        <Carousel title={"Gallery"} photoGallery={photoGallery}></Carousel>
      </PageLayout>
    </>
  );
};

export default Location;

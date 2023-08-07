import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ArticleCard } from "./cards/articleCard";

export const LatestArticle = () => {
  const totalPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const article = [
    {
      id:1,
      featured_image: "/assests/meal-prep-ideas-1.png",
      title: "Grilled Tomatoes at Home",
      subtitle: "Grilled Tomatoes at Home",
      excerpt:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      slug: "",
    },
    {
      id:2,
      featured_image: "/assests/meal-prep-ideas-2.png",
      title: "Snacks for Travel",
      subtitle: "Snacks for Travel",
      excerpt:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      slug: "",
    },
    {
      id:3,
      featured_image: "/assests/meal-prep-ideas-3.png",
      title: "Post-workout Recipes",
      subtitle: "Post-workout Recipes",
      excerpt:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      slug: "",
    },
    {
      id:4,
      featured_image: "/assests/meal-prep-ideas-4.png",
      title: "How To Grill Corn",
      subtitle: "How To Grill Corn",
      excerpt:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      slug: "",
    },
    {
      id:5,
      featured_image: "/assests/meal-prep-ideas-5.png",
      title: "Crunchwrap Supreme",
      subtitle: "Crunchwrap Supreme",
      excerpt:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      slug: "",
    },
    {
      id:6,
      featured_image: "/assests/meal-prep-ideas-6.png",
      title: "Broccoli Cheese Soup",
      subtitle: "Broccoli Cheese Soup",
      excerpt:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      slug: "",
    },
  ];

  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;
  const displayedArticles = article.slice(startIndex, endIndex);

  return (
    <>
      <Stack
        spacing={[10, 16]}
        px={[10, 20]}
        textAlign={["center", "center", "initial"]}
      >
        <Heading
          color={"primary"}
          fontWeight={"semibold"}
          fontSize={["1.75rem", "3.5rem"]}
          lineHeight={["3.375rem", "2.625rem"]}
        >
          Latest Article
        </Heading>

        <Flex
          justifyContent={["center", "center", "space-between"]}
          alignItems="center"
          gap={10}
          flexWrap={["wrap", "wrap"]}
        >
          {displayedArticles.map((singleArticle) => (
            <ArticleCard
              article={singleArticle}
              key={singleArticle.id}
            />
          ))}
        </Flex>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Button
            variant={"outline"}
            borderColor={"border"}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >{`<`}</Button>
          <Text>{currentPage + "/" + totalPage}</Text>
          <Button
            variant={"outline"}
            borderColor={"border"}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPage}
          >{`>`}</Button>
        </Box>
      </Stack>
    </>
  );
};

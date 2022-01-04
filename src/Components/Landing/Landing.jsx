import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import MainFeaturedPost from "./MainFeaturedPost"
import FeaturedPost from "./FeaturedPost"
import Navigation from "./Navigator"

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image:
    "https://arrestyourdebt.com/wp-content/uploads/2020/05/bad-credit-loans-guaranteed-approval-1024x768.jpg",
}

const featuredPosts = [
  {
    title: "Banks",
    description:
      "With Loan Prediction using Machine Leaning, Banks can Prevent themselves Loan defaulting from their Clients.",
    image:
      "https://cdn.pixabay.com/photo/2020/02/18/11/03/bank-4859142_960_720.png",
  },
  {
    title: "Applicants",
    description:
      "Before Applying for a loan, an Applicant can check the loan eligibility status by using This application.",
    image: "https://altafinance.org/l/per/per4.jpg",
  },
  {
    title: "Lending Agences",
    description:
      "This is not only for the Banks , even other lending campanies can use this application to check the eligibilty status for their clients.",
    image:
      "https://cdn.pixabay.com/photo/2014/03/24/17/14/education-295185_960_720.png",
  },
  {
    title: "Individuals",
    description:
      "Each and evryone  planning to apply for a loan or Lending , this is the right place to test your loan eligibility status",
    image:
      "https://cdn.pixabay.com/photo/2018/06/20/18/06/cash-3487046_960_720.png",
  },
]

export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4} style={{ marginTop: "20px" }}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  )
}

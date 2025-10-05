Initial readme set up

Attribution:
<a href="https://www.flaticon.com/free-icons/paintball" title="paintball icons">Paintball icons created by Smashicons - Flaticon</a>

# Reflection

- 🎯 What requirements did you achieve?
- 🎯 Were there any requirements or goals that you were unable to achieve?
- 🎯 If so, what was it that you found difficult about these tasks?

- Requesting feedback about a specific part of your submission.
- What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
- What errors or bugs did you encounter while completing your assignment? How did you solve them?
- What went really well and what could have gone better?

# Goals

### Base Requirements

- 🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
- ✅ Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
  - Please submit your database schema, as is mentioned in the submission instructions.
- 🎯 Create a delete button on posts that allows users to delete the post from the database.
- 🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
- 🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. `/posts/:postid`).
- 🎯 Add a `redirect` when a user creates a post to redirect them to the posts page.

### Stretch Requirements

- 🏹 Implement a `select` input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as `/categories` and `/categories/:id` to enable users to browse and interact with posts by category.
- 🏹 Create an edit functionality accessible via `/posts/:id/edit`, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
- 🏹 Develop an edit comment feature accessible via `/posts/:id/comments/:id/edit`, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.

# Vercel Deployment

1.  Ensure that any data displayed using .map() has a key.
2.  Push everything to GitHub.
3.  Click ‘Add New…’ and then select ‘Project’.
4.  In the ‘Environment Variables’ drop-down menu, add anything from your .env.local file here.
5.  Wait a minute or so, and your website is deployed!

# Resources:

[Codeevolution](https://www.youtube.com/@Codevolution)
[Code Stoic](https://www.youtube.com/@ashutoshpawar)  
[CssHero](https://csshero.org)
[Dev.To](https://dev.to/)
[MDN](https://developer.mozilla.org/)
[React](https://react.dev/)
[ReactRouter](https://reactrouter.com/)
[Reddit](https://reddit.com)
[SheCodes](https://shecodes.io/)
[StackOverflow](https://stackoverflow.com/)
[Supabase](https://supabase.com/docs)
[W3C](https://www.w3.org/)

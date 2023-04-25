const UsersPage = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user["Price"]} - {user.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const axios = require("axios");
let data = {
  Name: "Fried Rice",
  Type: "Veg",
  Meal: "Lunch",
  Price: 180,
  Availability: true,
  Rating: 4,
};
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/api/FoodItem/",
  headers: {},
  data: data,
};
export const getStaticProps = async () => {
  try {
    const response = await axios(config);
    const users = await response.data;
    return { props: { users } };
  } catch (err) {
    console.error(err.message);
    return { props: { users: [] } };
  }
};

export default UsersPage;

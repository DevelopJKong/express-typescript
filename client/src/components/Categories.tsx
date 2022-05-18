import styled from "styled-components";
import CategoryItem from "./CategoryItem";

export const categories = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Node.js",
    cat:"backend"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074",
    title: "Nest.js",
    cat:"backend"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "React",
    cat:"frontend"
  },
];


const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`;

const Categories = () => {
    return (<Container>
        {categories.map((item) => (
            <CategoryItem item={item} key={item.id}/>
        ))}
  
    </Container>);
};

export default Categories;

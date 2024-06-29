import { TodoList } from "@/widgets";
import styles from "./Main.module.scss";

const Main = (): React.ReactElement => {
  return (
    <div className={styles.main}>
      <TodoList />
    </div>
  );
};

export default Main;

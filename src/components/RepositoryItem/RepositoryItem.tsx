import React from "react";
import { Repository } from "../../types/repository";
import styles from "./RepositoryItem.module.scss";

interface RepositoryItemProps {
  repo: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h2>
      <p className={styles.description}>{repo.description}</p>
      <div className={styles.footer}>
        <span className={styles.language}>{repo.language}</span>
        <span className={styles.stars}>⭐ {repo.stargazers_count}</span>
      </div>
    </div>
  );
};

export default RepositoryItem;

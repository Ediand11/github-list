import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Repository } from "../../types/repository";
import { RepositoryItem } from "../RepositoryItem";
import styles from "./RepositoryList.module.scss";

const fetchRepositories = async (page: number) => {
  const { data } = await axios.get(
    `https://api.github.com/search/repositories?q=language:TypeScript&sort=stars&order=desc&page=${page}&per_page=10`
  );
  return data;
};

const RepositoryList: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["repositories", page],
    queryFn: () => fetchRepositories(page),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div className={styles.loader} />;
  if (isError) return <div className={styles.error}>Error: {(error as Error).message}</div>;

  return (
    <div className={styles.root}>
      {data.items.map((repo: Repository) => (
        <RepositoryItem key={repo.id} repo={repo} />
      ))}
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className={styles.paginationInfo}>Page {page}</span>
        <button
          className={styles.paginationButton}
          onClick={() => setPage((old) => old + 1)}
          disabled={!data.items.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RepositoryList;

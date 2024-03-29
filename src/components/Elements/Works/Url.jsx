const Link = (props) => {
  const { link, live, platform = "GitHub" } = props;
  return (
    <div className="flex gap-2">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="ml-2 mt-2 rounded-md border border-zinc-700 bg-zinc-400/10 py-1 px-3 text-xs text-zinc-200 hover:bg-zinc-100 hover:text-zinc-700 dark:border-blue-600 dark:bg-blue-100 dark:text-blue-600 dark:hover:bg-blue-200 sm:ml-0">
          {platform}
        </div>
      </a>
      <a href={live} target="_blank" rel="noreferrer">
        <div className="mt-2 rounded-md border border-zinc-700 bg-zinc-400/10 py-1 px-3 text-xs text-zinc-200 hover:bg-zinc-100 hover:text-zinc-700 dark:border-blue-600 dark:bg-blue-100 dark:text-blue-600 dark:hover:bg-blue-200">
          Live
        </div>
      </a>
    </div>
  );
};

export default Link;

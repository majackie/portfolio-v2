import { FaGithub, FaLink } from "react-icons/fa";

function Description({ title, text, sourceCodeUrl, hostedUrl }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl">{title}</span>
        <span className="flex gap-1">
          {sourceCodeUrl && (
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${title} Source Code`}
              className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <FaGithub />
            </a>
          )}
          {hostedUrl && (
            <a
              href={hostedUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${title} Hosted Example`}
              className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <FaLink />
            </a>
          )}
        </span>
      </div>
      <div>{text}</div>
    </div>
  );
}

export default Description;

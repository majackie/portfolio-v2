function Badge({ icon: Icon, label, title }) {
  return (
    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">
      <Icon title={title} />
      <span>{label}</span>
    </div>
  );
}

export default Badge;

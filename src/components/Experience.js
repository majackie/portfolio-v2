function Experience() {
  return (
    <div id="experience" className="pt-4">
      <div className="text-2xl">Experience</div>
      <hr className="my-2" />
      <div>
        <div className="flex justify-between">
          <div className="font-bold">Full-Stack Developer</div>
          <div>Sep 2023 - Dec 2023</div>
        </div>
        <div className="flex justify-between italic">
          <div className="justify-start">TeraDrive</div>
          <div className="justify-end">Burnaby, BC</div>
        </div>
        <ul className="list-disc pl-6">
          <li>
            Designed and developed a full-stack web-based case tracking system
            using Monday.com API, streamlining case management and improving
            team collaboration by consolidating data to a single platform
          </li>
          <li>
            Created and implemented a PostgreSQL database to migrate all data
            from Monday.com, ensuring seamless data transition and enhancing
            data management flexibility for future scalability
          </li>
          <li>
            Developed intuitive features to allow users to perform CRUD
            operations on the PostgreSQL database, streamlining data management
            and improving overall user efficiency
          </li>
          <li>
            Estimated annual labour savings of over $13,000 by reducing daily
            workload by ten minutes per employee for a team of ten at $30/hour
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <div className="font-bold">Software Developer</div>
          <div>Apr 2023 - May 2023</div>
        </div>
        <div className="flex justify-between italic">
          <div className="justify-start">MealPlanIQ</div>
          <div className="justify-end">Burnaby, BC</div>
        </div>
        <ul className="list-disc pl-6">
          <li>
            Developed a feature-rich web application to generate customized meal
            plans, significantly improving user engagement and satisfaction by
            offering tailored solutions
          </li>
          <li>
            Implemented personalized meal plans that integrated BMI and dietary
            restrictions, leading to more relevant meal recommendations and
            improved user experience
          </li>
          <li>
            Hosted web application and database on Google Cloud Platform,
            ensuring seamless scalability and minimal downtime for uninterrupted
            access
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <div className="font-bold">Junior Technician</div>
          <div>Sep 2021 - Dec 2021</div>
        </div>
        <div className="flex justify-between italic">
          <div className="justify-start">Bingham + Hill Architects</div>
          <div className="justify-end">Vancouver, BC</div>
        </div>
        <ul className="list-disc pl-6">
          <li>
            Collaborated with architects and engineers to interpret and
            implement drawing revisions, ensuring design changes were accurately
            reflected in final project plans
          </li>
          <li>
            Conducted detailed reviews and analyses of project specifications to
            confirm accuracy and alignment with the design intent, facilitating
            smooth project execution and reducing errors in construction
            documentation
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <div className="font-bold">Building Technologist</div>
          <div>Mar 2021 - Sep 2021</div>
        </div>
        <div className="flex justify-between italic">
          <div className="justify-start">STA</div>
          <div className="justify-end">Vancouver, BC</div>
        </div>
        <ul className="list-disc pl-6">
          <li>
            Carefully evaluated and refined drawing packages prior to client
            review and permit submission, ensuring compliance with regulatory
            standards and minimizing approval delays
          </li>
          <li>
            Collaborated with manufacturers to gather and compile project
            specifications, aligning material choices with both design
            requirements and client expectations for quality and functionality
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <div className="font-bold">Sales Representative</div>
          <div>Jan 2014 - Apr 2021</div>
        </div>
        <div className="flex justify-between italic">
          <div className="justify-start">Telus</div>
          <div className="justify-end">Vancouver, BC</div>
        </div>
        <ul className="list-disc pl-6">
          <li>
            Delivered tech support and training for devices, software, and
            connectivity issues, both in-person and remotely
          </li>
          <li>
            Provided exceptional customer service by addressing inquiries,
            resolving issues, offering tailored solutions to meet individual
            needs and educating customers on best practices for device usage
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;

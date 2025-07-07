export default function Modules() {
    return (
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1 - Introduction to Data Structures</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Understand fundamental data structures</li>
                  <li className="wd-content-item">Learn about arrays and linked lists</li>
                  <li className="wd-content-item">Analyze time and space complexity</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Data Structures & Algorithms - Chapter 1</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Data Structures</li>
                  <li className="wd-content-item">Array Operations and Implementation</li>
                  <li className="wd-content-item">Linked List Basics</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2 - Stacks and Queues</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Implement stack data structure</li>
                  <li className="wd-content-item">Understand queue operations (FIFO)</li>
                  <li className="wd-content-item">Apply stacks and queues to real-world problems</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Stacks and Queues</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Stack Operations: Push, Pop, Peek</li>
                  <li className="wd-content-item">Priority Queues and Deques</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3 - Trees and Binary Search</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Understand tree data structures</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Binary Tree Fundamentals</li>
                  <li className="wd-content-item">In-order, Pre-order, Post-order Traversal</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );
}
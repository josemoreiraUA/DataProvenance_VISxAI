const contents = {

    query: `
        <pre><code class="language-sql">
SELECT   EA.name as Employee, 
            SUM(T.hours) as hours
FROM     Training_actions.parquet T, 
            Employees_training_actions.parquet EA
WHERE    T.actionId = EA.actionId
GROUP BY EA.name
    UNION ALL
SELECT   ET.name, 
            ET.hours
FROM     Employees_training.parquet ET
        </code></pre>`,

    ast: `
        <img
            src="images/ast1.png"
            alt="Abstract Syntax Tree">
    `,

    ast_prov: `
        <img
            src="images/ast1_prov.png"
            alt="Relational Algebra">
    `,

    annotated_query: `
        <pre><code class="language-sql">
SELECT EA.name as Employee, 
        SUM(T.hours) as hours, 
        '(' || STRING_AGG(EA.prov || ' · ' || T.prov || ' ⊗ ' || hours, '  +  '  ORDER BY EA.prov, T.prov) || ')' as prov
FROM   Training_actions.parquet T, 
        Employees_training_actions.parquet EA
WHERE  T.actionId = EA.actionId
GROUP BY EA.name
    UNION ALL
SELECT ET.name, 
        ET.hours, 
        prov
FROM   Employees_training.parquet ET
        </code></pre>`,

    system: `
        <div class="content-description">

            <h3>Query Result</h3>

            <table>
                <tr>
                    <th>empId</th>
                    <th>Name</th>
                    <th>Promotion Date</th>
                </tr>

                <tr>
                    <td>emp-101</td>
                    <td>Alice Smith</td>
                    <td>2025-03-15</td>
                </tr>

                <tr>
                    <td>emp-105</td>
                    <td>Robert Jones</td>
                    <td>2025-06-21</td>
                </tr>
            </table>

        </div>
    `
};


function showContent(name, button) {

    document
        .querySelectorAll(".content-menu button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const display = document.getElementById("content-display");

    if (display && contents[name]) {
        display.innerHTML = contents[name];

        const codeBlocks = display.querySelectorAll(
            "code[class*='language-']"
        );

        codeBlocks.forEach(block => Prism.highlightElement(block));
    }
}



function initializeQuery() {
    const queryButton = document.querySelector(
        ".content-menu button[onclick*=\"'query'\"]"
    );

    if (queryButton) {
        showContent("query", queryButton);
        return true;
    }

    return false;
}

window.addEventListener("DOMContentLoaded", function () {

    // Try immediately
    if (initializeQuery()) {
        return;
    }

    // The content is loaded dynamically, so watch for it
    const observer = new MutationObserver(function () {
        if (initializeQuery()) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

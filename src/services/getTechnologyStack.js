export default function technologyByStack(technologies, stacks) {
    const stack = technologies.filter(technology => technology.stack === stacks);

    return stack;
};
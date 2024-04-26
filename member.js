function skillsMember() {
  return skills.map(skill => {
    return {
      name: skill.name,
      level: skill.level
    }
  })
}
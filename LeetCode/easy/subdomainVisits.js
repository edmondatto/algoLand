/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
  let subdomainVisitCount = {}
  let result = []

  for (let cpdomain of cpdomains) {
    const [count, domain] = cpdomain.split(' ')
    const subdomains = getSubDomains(domain) // O(100) or O(3) => Approximates constant time
    for (let subdomain of subdomains) { // O(3) => constant time
      if (subdomainVisitCount[subdomain]) {
        subdomainVisitCount[subdomain] += +count
      } else {
        subdomainVisitCount[subdomain] = +count
      }
    }
  }

  for (let key in subdomainVisitCount) {
    result.push(`${subdomainVisitCount[key]} ${key}`)
  }

  return result
}

function getSubDomains (domain) { // O(3) but uses more memory on the slice step
  let subdomains = []
  const fragments = domain.split('.')

  for (let i = fragments.length; i > 0; i--) {
    subdomains.push(fragments.slice(i - 1).join('.'))
  }
  return subdomains
}

function getSubDomains2 (domain) { // O(100)
  let subdomains = [domain]

  for (let i = domain.length; i > 0; i--) {
    if (domain[i] === '.') {
      subdomains.push(domain.substring(i + 1))
    }
  }
  return subdomains
}